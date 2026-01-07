import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-bold text-foreground">
            Cluely
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#mobile" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
              Mobile
              <span className="text-xs px-1.5 py-0.5 rounded-full bg-primary/20 text-primary">New</span>
            </a>
            <a href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </a>
          </div>
        </div>
        <Button variant="cta" size="sm">
          Get for Mac
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
