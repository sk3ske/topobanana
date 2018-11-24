import React from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';

class NavLink extends React.Component {
    render() {
        var isActive = this.context.router.route.location.pathname === this.props.to;
        if ( this.props.to === '/#nonsense'){
            if (this.context.router.route.location.pathname === '/moonshine'){
                isActive=true;
            }
            else if (this.context.router.route.location.pathname === '/caution'){
                isActive=true;
            }
            else if (this.context.router.route.location.pathname === '/kintsugi'){
                isActive=true;
            }
        }

        if ( this.props.to === '/#sense'){
            if (this.context.router.route.location.pathname === '/uxcasestudy'){
                isActive=true;
            }
            else if (this.context.router.route.location.pathname === '/flowchart'){
                isActive=true;
            }
        }

        if ( this.props.to === '/'){
          isActive=false;
        }

        var className = isActive ? 'active' : '';
        return(
            <Link className={className} {...this.props}>
                {this.props.children}
            </Link>
        );
    }
}

NavLink.contextTypes = {
    router: PropTypes.object
};

export default NavLink;
