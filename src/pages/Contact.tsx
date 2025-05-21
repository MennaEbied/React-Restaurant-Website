import { useState } from "react";
import { toast } from "sonner";
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);

    // Show success toast
    toast("Message Sent", {
      description: "Thank you for your message! We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-Rose font-montserrat py-8 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-10 md:mb-12">
        <h1 className="font-semibold text-amber-800 text-3xl md:text-4xl lg:text-5xl mb-3">
          Contact Us
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 md:p-8 flex-1 shadow-sm rounded-lg">
          <h2 className="text-2xl md:text-3xl text-amber-800 font-semibold mb-6">
            Reach Out To Us
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-700 text-lg mb-2">
                Location
              </h3>
              <p className="text-gray-700">123 Sushi Street Foodville,</p>
              <p className="text-gray-700">FD 12345</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 text-lg mb-2">Hours</h3>
              <p className="text-gray-700">
                Monday - Friday: 11:00 AM - 10:00 PM{" "}
              </p>
              <p className="text-gray-700">
                Saturday - Sunday: 12:00 PM - 11:00 PM
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Phone</h3>
              <p className="text-gray-700">(123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Email</h3>
              <p className="text-gray-700">info@sushidelight.com</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 flex-1">
          <h2 className="text-2xl md:text-3xl text-amber-800 font-semibold mb-6">
            Send Us Message
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                className="font-medium text-gray-700 text-lg mb-1 block"
                htmlFor="name"
              >
                Name
              </label>
              <input
                placeholder="Your name"
                type="text"
                className="w-full rounded-xl focus:outline-none border-gray-300 px-4 py-2 border"
                value={formData.name}
                onChange={handleChange}
                id="name"
                name="name"
              />
            </div>
            <div>
              <label
                className="font-medium text-gray-700 text-lg mb-1 block"
                htmlFor="email"
              >
                Email
              </label>
              <input
                placeholder="Your email"
                type="email"
                className="w-full rounded-xl focus:outline-none border-gray-300 px-4 py-2 border"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="font-medium text-gray-700 text-lg mb-1 block"
                htmlFor="phone"
              >
                Phone (optional)
              </label>
              <input
                placeholder="Your phone number"
                type="tel"
                className="w-full rounded-xl focus:outline-none border-gray-300 px-4 py-2 border"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="font-medium text-gray-700 text-lg mb-1 block"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                placeholder="Your message"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-amber-800 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-xl transition-colors duration-300 text-center w-full h-12 align-middle"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
