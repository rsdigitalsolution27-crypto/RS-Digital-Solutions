import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function PageTransition() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current === pathname) {
      return;
    }
    prevPathname.current = pathname;
    setShow(true);
    const timer = setTimeout(() => setShow(false), 650);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="page-transition"
          initial={{ scaleY: 0, originY: 1 }}
          animate={{ scaleY: 1, originY: 1 }}
          exit={{ scaleY: 0, originY: 0 }}
          transition={{
            duration: 0.55,
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      )}
    </AnimatePresence>
  );
}
