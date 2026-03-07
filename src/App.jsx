
function App() {
 

  return (
    <>
      <div class="bg-blue-600 lass-panel p-8 rounded-2xl shadow-2xl relative overflow-hidden">
        <form id="contact-form" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex flex-col gap-2">
                    <label class="text-white/90 text-sm font-medium">Full Name</label>
                    <input id="user_name" name="name" class="bg-background-dark/50 border border-[#315f68] rounded-lg h-14 px-4 text-white placeholder:text-[#90c1cb]/50 focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none neon-glow" placeholder="John Doe" type="text" required/>
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-white/90 text-sm font-medium">Email Address</label>
                    <input id="user_email" name="email" class="bg-background-dark/50 border border-[#1da2bd] rounded-lg h-14 px-4 text-white placeholder:text-[#90c1cb]/50 focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none neon-glow" placeholder="john@example.com" type="email" required/>
                </div>
            </div>
            
            <div class="flex flex-col gap-2">
                <label class="text-white/90 text-sm font-medium">Subject</label>
                <input id="subject" name="title" class="bg-background-dark/50 border border-[#315f68] rounded-lg h-14 px-4 text-white placeholder:text-[#90c1cb]/50 focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none neon-glow" placeholder="Project Inquiry" type="text"/>
            </div>
            
            <div class="flex flex-col gap-2">
                <label class="text-white/90 text-sm font-medium">Message</label>
                <textarea id="message" name="message" class="bg-background-dark/50 border border-[#315f68] rounded-lg p-4 text-white placeholder:text-[#90c1cb]/50 focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none neon-glow resize-none" placeholder="Tell me about..." rows="5" required></textarea>
            </div>
            
            <button id="contact-form" type="submit" class="bg-blue-900 w-full bg-primary text-background-dark font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:translate-y-[-2px] shadow-lg shadow-primary/20">
                Send Message
                <span class="material-symbols-outlined text-xl"></span>
            </button>
        </form>
    </div>
    </>
  )
}

export default App
