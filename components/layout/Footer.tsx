import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-lg font-semibold font-mono flex items-center gap-2">
              &lt;<span className="text-primary">Sofoniyas</span>/&gt;
            </Link>
            <p className="mt-2 text-muted-foreground">
              Full-Stack Web Developer with 5+ years of experience creating innovative digital solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/#about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/#projects" className="text-muted-foreground hover:text-primary">Projects</Link></li>
              <li><Link href="/#skills" className="text-muted-foreground hover:text-primary">Skills</Link></li>
              <li><Link href="/#contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Projects</h3>
            <ul className="space-y-2">
              <li><a href="https://edgetgas.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">Edget Gas</a></li>
              <li><a href="https://metbeltrading.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">Metbel Trading</a></li>
              <li><a href="https://hisabportal.netlify.app" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">Hisab ERP</a></li>
               <li><a href="https://staging.theyouthprint.net/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">theyoutprint</a></li>
              
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="sofoniyastekalegn@gmail.com" className="text-muted-foreground hover:text-primary" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {currentYear} Sofoniyas Tekalegn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}