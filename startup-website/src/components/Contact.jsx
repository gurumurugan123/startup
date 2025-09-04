import { useForm } from "react-hook-form";
import { contact } from "../data/content";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    alert(`Thanks ${data.name}! We’ll reach out soon.`);
    reset();
  };

  const socialIcons = {
    LinkedIn: <FaLinkedin size={20} />,
    GitHub: <FaGithub size={20} />,
    Instagram: <FaInstagram size={20} />,
  };

  return (
    <div className="section">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 dark:text-white">Get in Touch</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 rounded-2xl bg-white shadow-soft space-y-4 dark:bg-gray-800 dark:shadow-none">
          <div>
            <input {...register("name", { required: "Name is required" })} placeholder="Name" className="w-full border rounded-xl px-4 py-3 dark:bg-gray-700 dark:border-gray-600"/>
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <input {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Entered value does not match email format" } })} placeholder="Email" type="email" className="w-full border rounded-xl px-4 py-3 dark:bg-gray-700 dark:border-gray-600"/>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <textarea {...register("message", { required: "Message is required" })} placeholder="Message" rows="5" className="w-full border rounded-xl px-4 py-3 dark:bg-gray-700 dark:border-gray-600"/>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>
          <button className="px-5 py-3 rounded-xl bg-brandPurple text-white hover:opacity-90">Send Message</button>
        </form>

        <div className="p-6 rounded-2xl bg-white shadow-soft space-y-4 dark:bg-gray-800 dark:shadow-none">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-brandBlue" />
            <a className="text-brandBlue" href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-brandBlue" />
            <a className="text-brandBlue" href={`tel:${contact.phone}`}>{contact.phone}</a>
          </div>
          <div className="flex gap-4 pt-2">
            {contact.socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-brandBlue hover:text-brandPurple">
                {socialIcons[s.label]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

