export default function Home() {
  return (
    <div className="min-h-screen w-full border-2">
      <div className="text-center p-20">
        <span>Above and Beyond Pool Care</span>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-semibold my-4">Please Login</h2>
        <div className="flex flex-col items-center gap-4">
          <div>
            <label htmlFor="username-email" className="block">Username/Email:</label>
            <input type="text" id="username-email" className="border p-2 m-2" />
          </div>

          <div>
            <label htmlFor="password" className="block">Password:</label>
            <input type="password" id="password" className="border p-2 m-2" />
          </div>

          <button type="button" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
        </div>
      </div>
    </div>
  );
}
