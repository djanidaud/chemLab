import { useCallback, useRef } from "react";

/**
 * @typedef {object} UseCallbackDebouncedOptions
 * @property {boolean} [leading]
 */

/**
 *  A `useCallback` implementation which debounces its calls, such that the callback function will not be invoked
 *  more frequently than the provided debounce timeout.
 *
 *  By default the callback is not invoked until after the timeout has passed. This can be changed so that the first call
 *  is immediately invoked by setting `leading` to true in the options argument.
 *
 *  Common use cases are when you want to avoid calling an expensive operation too frequently with rapidly changing data,
 *  such as if a server request will be made for every keypress in an input
 *
 *  Example usage:
 *
 *  function Search(props) {
 *   const [options, setOptions] = useState([]);
 *   const onSearchQueryChanged = useCallbackDebounced(
 *     (query) => {
 *       makeServerRequest(query).then((data) => setOptions(data.json()));
 *     },
 *     [],
 *     500
 *   );
 *
 *   return (
 *     <SearchDropdown
 *       options={options}
 *       value={props.value}
 *       onChange={onSearchQueryChanged}
 *     />
 *   );
 *  }
 *
 * @param {(...parameters: any[]) => void} callback
 * @param {React.DependencyList} dependencies
 * @param {number} ms
 * @param {UseCallbackDebouncedOptions} options
 */
export default function useCallbackDebounced(
  callback,
  dependencies,
  ms,
  options = { leading: false }
) {
  const timeout = useRef(null);

  return useCallback(
    (...args) => {
      if (options.leading && timeout.current === null) {
        callback(...args);
        timeout.current = setTimeout(() => {
          timeout.current = null;
        }, ms);
      } else {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
          callback(...args);
          timeout.current = null;
        }, ms);
      }
    },
    [ms, options.leading, ...dependencies]
  );
}
