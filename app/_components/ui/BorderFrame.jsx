/**
 * @param {object} props - component props
 * @param {string} [props.className=""] - extra classNames for the container
 * @param {string} [props.contentWrapperClassName=""] - extra classNames for the content wrapper
 * @param {ReactNode} props.children - inside content of the frame
 */

function BorderFrame({
  className = "",
  contentWrapperClassName = "",
  children,
}) {
  return (
    <div
      className={`sm:grid grid-cols-[0.5fr_10fr_0.5fr] grid-rows-[0.8fr_10fr_0.8fr] divide-2 divide-black md:w-9/12 xl:w-3/5 sm:min-h-[450px] shrink-0 ${className}`}
    >
      <div className="border-r-3 border-b-3 -mr-0.5 -mb-[2.5px] hidden sm:block"></div>
      <div></div>
      <div className="border-b-3 border-l-3 -mb-[2.5px] -ml-[2.5px] hidden sm:block"></div>
      <div></div>
      <div
        className={`border-y-3 sm:border-x-3 px-2 py-5 xs:px-5 lg:p-10 flex flex-col justify-center gap-6 ${contentWrapperClassName}`}
      >
        {children}
      </div>
      <div></div>
      <div className="border-t-3 border-r-3 -mt-0.5 -mr-0.5 hidden sm:block"></div>
      <div></div>
      <div className="border-t-3 border-l-3 -mt-0.5 -ml-[2.5px] hidden sm:block"></div>
    </div>
  );
}

export default BorderFrame;
