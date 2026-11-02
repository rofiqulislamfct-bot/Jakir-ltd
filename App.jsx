function App() {
    const [lang, setLang] = React.useState('bn');
    const [darkMode, setDarkMode] = React.useState(true);
    const [activeRole, setActiveRole] = React.useState('owner');
    const [activeOwner, setActiveOwner] = React.useState('zakir');
    const [activeTab, setActiveTab] = React.useState('overview');

    const [employees, setEmployees] = React.useState([
        { id: 1, name: 'জহির উদ্দিন', role: 'Head Employee', unit: 'হানিফ ডোর', salary: 18000, status: 'Active', lates: 1 },
        { id: 2, name: 'রফিক ইসলাম', role: 'Employee', unit: 'জাকির ইলেকট্রনিকস', salary: 14000, status: 'Active', lates: 3 },
        { id: 3, name: 'শামীম আহাম্মেদ', role: 'Driver', unit: 'লজিস্টিকস', salary: 15000, status: 'Active', lates: 0 }
    ]);

    const [orders, setOrders] = React.useState([
        { id: 'MEMO-1001', customer: 'মেসার্স ভাই ভাই এন্টারপ্রাইজ', phone: '01811223344', address: 'ঢাকা রোড, ফেনী', unit: 'হানিফ ডোর' }
    ]);

    const [inventory, setInventory] = React.useState([
        { id: 1, unit: 'হানিফ ডোর', name: 'সেগুন কাঠের পারটেক্স ডোর', stock: 25, buyPrice: 3500, salePrice: 4800 },
        { id: 2, unit: 'জাকির ইলেকট্রনিকস', name: 'সনি ৪কে টিভি ৪৩ ইঞ্চি', stock: 12, buyPrice: 22500, salePrice: 26500 },
        { id: 3, unit: 'জাকির ইলেকট্রনিকস', name: 'মিয়াকো স্যান্ডউইচ মেকার', stock: 18, buyPrice: 2200, salePrice: 2900 }
    ]);

    const [attendanceLogs, setAttendanceLogs] = React.useState([
        { id: 1, name: 'রফিক ইসলাম', time: '09:05 AM', status: 'Late (5m)', penaltyProposed: false, ownerDecision: 'Pending' }
    ]);

    const [showChallanModal, setShowChallanModal] = React.useState(false);
    const [selectedOrder, setSelectedOrder] = React.useState(null);

    const t = {
        bn: {
            appName: 'যাকির লিমিটেড ম্যানেজমেন্ট',
            subtitle: 'হানিফ ডোর ও জাকির ইলেকট্রনিক সমন্বিত অপারেটিং সিস্টেম',
            ownersTitle: '৩ জন সমান অংশীদার মালিক: জাকির হোসেন (Chairman) / রফিকুল ইসলাম হৃদয় (Vice Chairman) / আবু ছাকের জীবন (Proprietor)',
            overview: 'ওভারভিউ',
            employees: 'কর্মচারী দল',
            orders: 'অর্ডার ও চালান',
            inventory: 'ইনভেন্টরি',
            attendance: 'উপস্থিতি ও পেনাল্টি',
            factory: 'ফ্যাক্টরি ও ক্লিনিক',
            driver: 'ড্রাইভার ট্র্যাকিং',
            accounts: 'হিসাব-নিকাশ',
            comm: 'কমিউনিকেশন',
            totalEstValue: 'মোট আনুমানিক স্টক ও মূলধন মূল্য',
            activeOrders: 'সক্রিয় অর্ডার',
            dailySales: 'আজকের ক্যাশ ও ব্যাংক সেলস',
            pendingApprovals: 'অনুমোদনের অপেক্ষায়',
            createNewOrder: 'নতুন অর্ডার বা মেমো তৈরি করুন',
            printChallan: 'ডিজিটাল চালান প্রিন্ট করুন',
            save: 'সংরক্ষণ করুন',
            close: 'বন্ধ করুন',
            signaturePad: 'গ্রাহকের ডিজিটাল স্বাক্ষর'
        },
        en: {
            appName: 'JAKIR LTD Management',
            subtitle: 'Hanif Door & Jakir Electronic Integrated OS',
            ownersTitle: '3 Equal Owners: Zakir Hossain (Chairman) / Rafiqul Islam Hriday (Vice Chairman) / Abu Saker Jiban (Proprietor)',
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
        <div className={`min-h-screen ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} font-sans p-4`}>
            {/* Header */}
            <header className={`sticky top-0 z-50 backdrop-blur-md border-b ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'} p-4 rounded-xl mb-4 shadow-lg`}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center font-bold text-slate-950 shadow">
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
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 transition">
                            🌐 {lang === 'bn' ? 'English' : 'বাংলা'}
                        </button>
                        <button 
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-lg border border-slate-700 bg-slate-800 text-yellow-400 hover:bg-slate-700 transition">
                            {darkMode ? '☀️' : '🌙'}
                        </button>
                    </div>
                </div>
                <div className="mt-3 py-1.5 px-3 rounded-lg text-[11px] text-center font-medium border border-amber-500/30 bg-amber-500/10 text-amber-400">
                    👑 {currentT.ownersTitle}
                </div>
            </header>

            {/* Navigation Tabs */}
            <nav className="max-w-7xl mx-auto flex overflow-x-auto gap-2 pb-2 mb-4 scrollbar-none">
                {[
                    { id: 'overview', label: currentT.overview },
                    { id: 'inventory', label: currentT.inventory },
                    { id: 'employees', label: currentT.employees },
                    { id: 'orders', label: currentT.orders },
                    { id: 'attendance', label: currentT.attendance }
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition shadow-sm ${
                            activeTab === tab.id 
                                ? 'bg-amber-500 text-slate-950 font-bold' 
                                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </nav>

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto space-y-4">
                {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 shadow">
                            <h3 className="text-xs text-slate-400 font-medium mb-1">{currentT.totalEstValue}</h3>
                            <p className="text-xl font-bold text-emerald-400">৳ ৪,৫০,০০০</p>
                        </div>
                        <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 shadow">
                            <h3 className="text-xs text-slate-400 font-medium mb-1">{currentT.activeOrders}</h3>
                            <p className="text-xl font-bold text-amber-400">{orders.length} টি</p>
                        </div>
                        <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 shadow">
                            <h3 className="text-xs text-slate-400 font-medium mb-1">{currentT.dailySales}</h3>
                            <p className="text-xl font-bold text-emerald-400">৳ ৫২,৩০০</p>
                        </div>
                        <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 shadow">
                            <h3 className="text-xs text-slate-400 font-medium mb-1">{currentT.pendingApprovals}</h3>
                            <p className="text-xl font-bold text-yellow-400">১ টি</p>
                        </div>
                    </div>
                )}

                {activeTab === 'inventory' && (
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow space-y-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-base font-bold text-emerald-400">{currentT.inventory} তালিকা</h2>
                            <span className="text-xs bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-lg border border-emerald-500/20">মোট পণ্য: {inventory.length}</span>
                        </div>
                        <div className="space-y-3
