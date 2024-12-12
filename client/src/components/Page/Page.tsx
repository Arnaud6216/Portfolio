import { motion } from "framer-motion";
import "./Page.css";

interface PageProps {
  title: string;
  content: string;
  visible: boolean;
}

const Page: React.FC<PageProps> = ({ title, content, visible }) => {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, rotateY: -180 }}
      animate={
        visible ? { opacity: 1, rotateY: 0 } : { opacity: 0, rotateY: -180 }
      }
      transition={{ duration: 0.6 }}
    >
      <div className="page-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </motion.div>
  );
};

export default Page;
