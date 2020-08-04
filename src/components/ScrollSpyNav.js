import React, {Component} from 'react';

class ScrollSpyNav extends Component {
    constructor(props) {
        super(props);

        this.props = props;
        this.scrollTargetIds = this.props.scrollTargetIds;
        this.activeNavClass = this.props.activeNavClass;
        this.scrollDuration = this.props.scrollDuration || 1000;
        this.headerBackground = this.props.headerBackground;
        this.offset = this.props.offset || 0;

        if (this.props.router && this.props.router === "HashRouter") {
            this.homeDefaultLink = "#/";
            this.hashIdentifier = "#/#";
        } else {
            this.homeDefaultLink = "/";
            this.hashIdentifier = "#";
        }

        this.state = {
            prevSectionID: null
        }
    }

    easeInOutQuad(current_time, start, change, duration) {
        current_time /= duration / 2;
        if (current_time < 1) return change / 2 * current_time * current_time + start;
        current_time--;
        return -change / 2 * (current_time * (current_time - 2) - 1) + start;
    };

    /**
     * Perform scroll animation with given start place, end place and duration
     * @param {Number} start
     * @param {Number} to
     * @param {Number} duration
     */
    scrollTo(start, to, duration) {
        let change = to - start,
            currentTime = 0,
            increment = 10;

        let animateScroll = () => {
            currentTime += increment;
            let val = this.easeInOutQuad(currentTime, start, change, duration);
            window.scrollTo(0, val);
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };

        animateScroll();
    }

    /**
     * Get the nav link element with a given sectionID that the nav link links to
     * @param {String} sectionID
     */
    getNavLinkElement(sectionID) {
        return document.querySelector(`a[href='${this.hashIdentifier}${sectionID}']`);
    }

    /**
     * Given a nav href url, get its clean sectionID based on if there is hash router identifier or not
     * @param {String} navHref
     */
    getNavToSectionID(navHref) {
        return navHref && navHref.includes(this.hashIdentifier) ?
            navHref.replace(this.hashIdentifier, "") : "";
    }

    /**
     * Disable the active style of current section ID with old section ID.
     * @param {String} newSectionID
     */
    updateNavLinkActiveStyle(newSectionID) {
        this.getNavLinkElement(newSectionID).classList.add(this.activeNavClass);
        if (this.state.prevSectionID !== null) {
            this.getNavLinkElement(this.state.prevSectionID).classList.remove(this.activeNavClass);
        }
        this.setState({
            prevSectionID: newSectionID
        });
    }

    componentDidMount() {
        if (document.querySelector(`a[href='${this.homeDefaultLink}']`)) {
            document.querySelector(`a[href='${this.homeDefaultLink}']`)
                .addEventListener("click", (event) => {
                    event.preventDefault();
                    this.scrollTo(window.pageYOffset, 0, this.scrollDuration);
                    window.location.hash = "";
                });
        }

        document.querySelector("div[data-nav='list']").querySelectorAll("a")
            .forEach((navLink) => {
                navLink.addEventListener("click", (event) => {
                    event.preventDefault();
                    let sectionID = this.getNavToSectionID(navLink.getAttribute("href"));

                    if (sectionID) {
                        let scrollTargetPosition = document.getElementById(sectionID).offsetTop
                            - (this.headerBackground ?
                                document.querySelector("div[data-nav='list']").scrollHeight : 0);
                        this.scrollTo(window.pageYOffset, scrollTargetPosition + this.offset, this.scrollDuration);
                    } else {
                        this.scrollTo(window.pageYOffset, 0, this.scrollDuration);
                    }
                });
            });

        window.addEventListener("scroll", () => {
            let scrollSectionOffsetTop;

            // eslint-disable-next-line array-callback-return
            this.scrollTargetIds.map((sectionID) => {
                scrollSectionOffsetTop = document.getElementById(sectionID).offsetTop
                    - (this.headerBackground ?
                        document.querySelector("div[data-nav='list']").scrollHeight : 0);
                if (this.state.prevSectionID !== sectionID &&
                    (window.pageYOffset + 2 * document.getElementById(sectionID).scrollHeight > scrollSectionOffsetTop)) {
                    this.updateNavLinkActiveStyle(sectionID);
                }
            });
        });
    }

    render() {
        return (
            <div data-nav="list">
                {this.props.children}
            </div>
        );
    }
}

export default ScrollSpyNav;