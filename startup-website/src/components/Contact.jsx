import { useForm } from "react-hook-form";
import { contact } from "../data/content";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // You can wire this to your backend or a service like Formspree
    alert(`Thanks ${data.name}! We’ll reach out soon.`);
    reset();
  };

  return (
    <div className="section">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Get in Touch</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 rounded-2xl bg-white shadow-soft space-y-4">
          <input {...register("name", { required: true })} placeholder="Name" className="w-full border rounded-xl px-4 py-3"/>
          <input {...register("email", { required: true })} placeholder="Email" type="email" className="w-full border rounded-xl px-4 py-3"/>
          <textarea {...register("message", { required: true })} placeholder="Message" rows="5" className="w-full border rounded-xl px-4 py-3"/>
          <button className="px-5 py-3 rounded-xl bg-brandPurple text-white hover:opacity-90">Send Message</button>
        </form>

        <div className="p-6 rounded-2xl bg-white shadow-soft space-y-4">
          <div><span className="font-semibold">Email:</span> <a className="text-brandBlue" href={`mailto:${contact.email}`}>{contact.email}</a></div>
          <div><span className="font-semibold">Phone:</span> <a className="text-brandBlue" href={`tel:${contact.phone}`}>{contact.phone}</a></div>
          <div className="flex gap-4 pt-2">
            {contact.socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-sm underline hover:text-brandPurple">{s.label}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
