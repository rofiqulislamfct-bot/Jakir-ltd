import React, { useState } from 'react';
import { 
  Building2, Users, ShoppingCart, FileText, Truck, 
  DollarSign, Phone, Shield, CheckCircle, XCircle, 
  Clock, AlertTriangle, Plus, Edit, Trash2, Camera, 
  MapPin, Printer, Download, Globe, Lock, Unlock, 
  MessageSquare, Video, Mic, ArrowRight, Menu, X, 
  Sun, Moon, Check, Briefcase, Award, TrendingUp, 
  Package, Box, Layers, RefreshCw, Send, PhoneCall
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('bn');
  const [darkMode, setDarkMode] = useState(true);
  const [activeRole, setActiveRole] = useState('owner');
  const [activeOwner, setActiveOwner] = useState('zakir');
  const [activeTab, setActiveTab] = useState('overview');
  
  const [employees, setEmployees] = useState([
    { id: 1, name: 'রহিম উদ্দিন', role: 'Head Employee', unit: 'হানিফ ডোর', salary: 18000, status: 'Active', lates: 1 },
    { id: 2, name: 'করিম মিয়া', role: 'Employee', unit: 'জাকির ইলেকট্রনিক', salary: 14000, status: 'Active', lates: 3 },
    { id: 3, name: 'সজীব আহমেদ', role: 'Driver', unit: 'লজিস্টিক', salary: 15000, status: 'Active', lates: 0 },
  ]);

  const [orders, setOrders] = useState([
    { id: 'MEMO-1001', customer: 'মেসার্স ভাই ভাই এন্টারপ্রাইজ', phone: '01811223344', address: 'ঢাকা রোড, ফেনী', unit: 'হানিফ ডোর', item: 'পালিশ করা মেহগনি দরজা', qty: 5, price: 4500, total: 22500, advance: 5000, paid: 5000, due: 17500, status: 'NEW', date: '2026-11-03' }
  ]);

  const [inventory, setInventory] = useState([
    { id: 1, unit: 'হানিফ ডোর', name: 'সেগুন কাঠের প্যানেল ডোর', stock: 25, buyPrice: 3500, salePrice: 4800 },
    { id: 2, unit: 'জাকির ইলেকট্রনিক', name: 'সনি ৪কে টিভি ৩২ ইঞ্চি', stock: 12, buyPrice: 22000, salePrice: 26500 },
    { id: 3, unit: 'জাকির ইলেকট্রনিক', name: 'মিয়াকো স্যান্ডউইচ মেকার', stock: 18, buyPrice: 2200, salePrice: 2900 }
  ]);

  const [attendanceLogs, setAttendanceLogs] = useState([
    { id: 1, name: 'রহিম উদ্দিন', time: '09:05 AM', status: 'Late (5m)', penaltyProposed: false, ownerDecision: 'Pending' }
  ]);

  const [showChallanModal, setShowChallanModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const t = {
    bn: {
      appName: 'জাকির লিমিটেড ম্যানেজমেন্ট',
      subtitle: 'হানিফ ডোর ও জাকির ইলেকট্রনিক সমন্বিত অপারেটিং সিস্টেম',
      ownersTitle: '৩ সমক্ষমতাসম্পন্ন মালিক: জাকির হোসেন (Chairman) / রফিকুল ইসলাম হৃদয় (Vice Chairman) / আবু সাকের জীবন (Proprietor)',
      overview: 'ওভারভিউ',
      employees: 'কর্মচারী দল',
      orders: 'অর্ডার ও চালান',
      inventory: 'ইনভেন্টরি',
      attendance: 'উপস্থিতি ও পেনাল্টি',
      factory: 'ফ্যাক্টরি ও ক্লিনিং',
      driver: 'ড্রাইভার ট্র্যাকিং',
      accounts: 'হিসাব-নিকাশ',
      comm: 'কমিউনিকেশন',
      totalEstValue: 'মোট আনুমানিক স্টক ও মূলধন মূল্য',
      activeOrders: 'সক্রিয় অর্ডার',
      dailySales: 'আজকের ক্যাশ ও ব্যাংক সেলস',
      pendingApprovals: 'অনুমোদনের অপেক্ষায়',
      createNewOrder: 'নতুন অর্ডার বা মেমো তৈরি করুন',
      printChallan: 'ডিজিটাল চালান প্রিন্ট করুন',
      save: 'সংরক্ষণ করুন',
      close: 'বন্ধ করুন',
      signaturePad: 'গ্রাহকের ডিজিটাল স্বাক্ষর'
    },
    en: {
      appName: 'JAKIR LTD Management',
      subtitle: 'Hanif Door & Jakir Electronic Integrated OS',
      ownersTitle: '3 Equal Owners: Zakir Hossain (Chairman) / Rafiqul Islam Hridoy (Vice Chairman) / Abu Saker Jiban (Proprietor)',
      overview: 'Overview',
      employees: 'Employees',
      orders: 'Orders & Challan',
      inventory: 'Inventory',
      attendance: 'Attendance & Penalty',
      factory: 'Factory & Cleaning',
      driver: 'Driver Tracking',
      accounts: 'Accounts',
      comm: 'Communication',
      totalEstValue: 'Total Estimated Capital & Stock Value',
      activeOrders: 'Active Orders',
      dailySales: 'Today Cash & Bank Sales',
      pendingApprovals: 'Pending Approvals',
      createNewOrder: 'Create New Order / Memo',
      printChallan: 'Print Digital Challan',
      save: 'Save',
      close: 'Close',
      signaturePad: 'Customer Digital Signature'
    }
  };

  const currentT = t[lang];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} font-sans pb-12 transition-colors duration-300`}>
      
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'} px-4 py-3 shadow-sm`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center shadow-md font-black text-slate-950 text-xl">
              JL
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">{currentT.appName}</h1>
              <p className="text-xs text-amber-500 font-medium">{currentT.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-semibold border ${darkMode ? 'border-slate-700 bg-slate-800 text-amber-400 hover:bg-slate-700' : 'border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-200'}`}
            >
              <Globe size={14} />
              <span>{lang === 'bn' ? 'English' : 'বাংলা'}</span>
            </button>

            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border ${darkMode ? 'border-slate-700 bg-slate-800 text-yellow-400' : 'border-slate-300 bg-slate-100 text-slate-700'}`}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>

        <div className={`mt-2 py-1 px-3 rounded-lg text-[11px] text-center font-medium border ${darkMode ? 'bg-amber-500/10 border-amber-500/20 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-800'}`}>
          🛡️ {currentT.ownersTitle}
        </div>
      </header>

      <div className={`border-b ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-100 border-slate-200'} px-4 py-2 overflow-x-auto`}>
        <div className="max-w-7xl mx-auto flex space-x-2 min
