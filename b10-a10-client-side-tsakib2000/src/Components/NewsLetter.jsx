import toast from "react-hot-toast";


const NewsLetter = () => {
    const handleSubmit=e=>{
        e.preventDefault();
        const email =e.target.email.value;
        emailjs
        .send('service_098cd9c', 'template_smb4nif', {email}, {
          publicKey: 'cp8Zdk5Q0VkB4te57',
        })
        .then(
          () => {
            toast.success('Thank your for subscribing');
            e.target.reset();
          },
          (error) => {
            toast.error('FAILED...', error.text);
          },
        );
    }
    return (
<div id="subscribe" className="bg-white dark:bg-gray-600 my-4 py-12 px-6 md:px-16">
  <div className="text-center max-w-2xl mx-auto">
    <h2 className="text-3xl font-bold text-rose-800 mb-4">
      Stay Updated with the Latest Game News!
    </h2>
    <p className="text-gray-700 mb-6">
      Subscribe to our newsletter and get the latest reviews, updates, and news delivered straight to your inbox. Don't miss out!
    </p>
  </div>

  <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
    <input
    name="email"
      type="email"
      placeholder="Enter your email address"
      className="w-full md:w-2/3 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
    />
    <button

      className="btn bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300"
    >
      Subscribe
    </button>
  </form>

  <div className="text-center mt-6 text-sm text-gray-500">
    We respect your privacy. Unsubscribe anytime.
  </div>
</div>

    );
};

export default NewsLetter;