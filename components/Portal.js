'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var reactDom = require('react-dom');
var react = require('react');

/* istanbul ignore file */
/**
 * Creates DOM element to be used as React root.
 * @returns {HTMLElement}
 */

function createRootElement(id) {
  var rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}
/**
 * Appends element as last child of body.
 * @param {HTMLElement} rootElem
 */


function addRootElement(rootElem) {
  document.body.insertBefore(rootElem, document.body.lastElementChild.nextElementSibling);
}
/**
 * Hook to create a React Portal.
 * Automatically handles creating and tearing-down the root elements (no SRR
 * makes this trivial), so there is no need to ensure the parent target already
 * exists.
 *
 * @example
 * const target = usePortal(id, [id]);
 * return createPortal(children, target);
 *
 * @param {String} id The id of the target container, e.g 'modal' or 'spotlight'
 * @returns {HTMLElement} The DOM node to use as the Portal target.
 */


function usePortal(id) {
  var rootElemRef = react.useRef(null); // eslint-disable-next-line

  react.useEffect(function setupElement() {
    // Look for existing target dom element to append to
    var existingParent = document.querySelector("#".concat(id)); // Parent is either a new root or the existing dom element

    var parentElem = existingParent || createRootElement(id); // If there is no existing DOM element, add a new one.

    if (!existingParent) {
      addRootElement(parentElem);
    } // Add the detached element to the parent


    parentElem.appendChild(rootElemRef.current);
    return function removeElement() {
      rootElemRef.current.remove();

      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, [id]);
  /**
   * It's important we evaluate this lazily:
   * - We need first render to contain the DOM element, so it shouldn't happen
   *   in useEffect. We would normally put this in the constructor().
   * - We can't do 'const rootElemRef = useRef(document.createElement('div))',
   *   since this will run every single render (that's a lot).
   * - We want the ref to consistently point to the same DOM element and only
   *   ever run once.
   * @link https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
   */

  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
    }

    return rootElemRef.current;
  }

  return getRootElem();
}

// disable jest here
/**
 * A `Portal` Component that simplifies the usage of React portals.
 */

var Portal =
/* istanbul ignore next */
function Portal(_ref) {
  var id = _ref.id,
      children = _ref.children;
  var target = usePortal(id);
  return reactDom.createPortal(children, target);
};

Portal.propTypes = {
  /** @ignore */
  children: PropTypes.node.isRequired,

  /** `ID` of the DOM element */
  id: PropTypes.string.isRequired
};

module.exports = Portal;
