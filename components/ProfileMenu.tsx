import Link from "next/link";
import { motion } from "framer-motion";
import { FaUser, FaUserEdit, FaCamera, FaFileInvoice, FaCreditCard, FaBell, FaSignOutAlt } from 'react-icons/fa';

interface ProfileMenuProps {
  onSelect: (sectionId: string) => void;
  selectedSection: string;
}

const navItems = [
  { id: "public-profile", label: "Vezi profil public", icon: <FaUser /> },
  { id: "profile", label: "Profil", icon: <FaUserEdit /> },
  { id: "photography", label: "Fotografie", icon: <FaCamera /> },
  { id: "invoices", label: "Facturi", icon: <FaFileInvoice /> },
  { id: "payment-methods", label: "Metode de Plată", icon: <FaCreditCard /> },
  { id: "notifications", label: "Notificări", icon: <FaBell /> },
  { id: "close-account", label: "Închidere Cont", icon: <FaSignOutAlt /> },
];

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20},
  visible: { opacity: 1, y: 0 },
};

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  onSelect,
  selectedSection,
}) => (
  <motion.div
    className="p-6"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <motion.ul
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-4 lg:gap-2"
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      {navItems.map((item) => (
        <motion.li
          key={item.id}
          variants={itemVariants}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.97 }}
          className={`relative ${selectedSection === item.id ? 'bg-primary text-white' : 'bg-white text-gray-600'} rounded-lg`}
        >
          <Link
            href={`#${item.id}`}
            onClick={() => onSelect(item.id)}
            className={`flex items-center py-3 px-6 transition-all duration-300 rounded-lg relative overflow-hidden`}
          >
            <span className="mr-3 text-xl">{item.icon}</span>
            {item.label}
            <motion.div
              className={`absolute bottom-0 left-0 w-full h-1 bg-primary ${selectedSection === item.id ? "scale-x-100" : "scale-x-0"} transition-transform duration-300`}
            />
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
);

export default ProfileMenu;
