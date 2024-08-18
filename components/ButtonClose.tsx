import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const CloseButton: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <motion.div
    onClick={onClose}
    className="w-8 h-8 flex items-center justify-center cursor-pointer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <FontAwesomeIcon icon={faX} className="text-primary w-4 h-4" />
  </motion.div>
);

export default CloseButton;
