export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle your form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen w-full border-2">
      <div className="text-center p-20">
        <span>Above and Beyond Pool Care</span>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-semibold my-4">Please Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <div>
            <label htmlFor="username-email" className="block">Username/Email:</label>
            <input type="text" id="username-email" className="border p-2 m-2"></input>
          </div>

          <div>
            <label htmlFor="password" className="block">Password:</label>
            <input type="password" id="password" className="border p-2 m-2"></input>
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
        </form>
      </div>
    </div>
  );
}
