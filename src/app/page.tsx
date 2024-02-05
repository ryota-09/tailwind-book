
interface CustomCSSProperties extends React.CSSProperties {
  '--parent-height'?: string; // ここにカスタムCSS変数を追加
}

export default function Home() {
  const style: CustomCSSProperties = {
    '--parent-height': '300px', // カスタムプロパティを安全に使用
  };
  return (
    <div>
      <h1>Home</h1>
      <p id="sample" className="target:bg-red-500">
        Welcome to the home page
      </p>
      <div>
        <div>
          <div id="div-1" className="first:bg-red-500">
            :first-childである（:first-of-typeでもある）
          </div>
          <span id="span-1" className="first-of-type:bg-blue-500">
            :first-of-typeである（:first-childではない）
          </span>
          <span id="span-2">...</span>
          <span id="span-3" className="[&:nth-child(3n)]:text-red-500">
            ...aaaaa
          </span>
          <span id="span-3" className="[&:nth-child(3n)]:text-red-500">
            ...aaaaa
          </span>
          <span id="span-3" className="[&:nth-child(3n)]:text-red-500">
            ...aaaaa
          </span>
          <div id="div-2" className="last-of-type:bg-blue-500">
            :last-of-typeである（:last-childではない）
          </div>
          <span id="span-4" className="last:bg-red-500">
            :last-childである（:last-of-typeでもある）
          </span>
        </div>
      </div>
      <div>
        <div className="has-[dialog[open]]:overflow-hidden">
          <dialog open>dialog</dialog>
        </div>
      </div>
      <br />
      <div>
        <input
          type="text"
          className="placeholder:text-red-500"
          placeholder="プレイスホルダー"
        />
        <input
          type="text"
          className="placeholder-shown:text-blue-500"
          placeholder="プレイスホルダー"
        />
      </div>
      <div>
        <input
          type="file"
          className="
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        />
      </div>
      <div>
        <p className="first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-line:uppercase first-line:tracking-widest">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="bg-red-500 h-[200px] lg:h-[var(--parent-height)]" style={style}>
        伸びる
      </div>
      <div className="bg-red-500 h-[200px] lg:h-[var(--parent-height)]" style={{ ["--parent-height" as string]: "300px" }}>
        伸びる
      </div>
    </div>
  );
}
