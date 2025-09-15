import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  StickyNote,
  Package,
  FileText,
  Users,
  Settings,
  HelpCircle,
  ChevronDown,
} from "lucide-react";

export const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: Calendar, label: "Schedule", path: "/schedule" },
    { icon: StickyNote, label: "Note", path: "/notes" },
    { icon: Package, label: "Products", path: "/products" },
    { icon: FileText, label: "Report", path: "/reports" },
  ];

  const recordItems = [
    { icon: Users, label: "Team", path: "/team" },
    { icon: Users, label: "Clients", path: "/clients" },
  ];

  const bottomItems = [
    { icon: Settings, label: "Settings", path: "/settings" },
    { icon: HelpCircle, label: "Support", path: "/support" },
  ];

  return (
    <div className="w-64 bg-white h-full border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">W</span>
          </div>
          <span className="text-xl font-semibold">weihu</span>
        </div>
      </div>

      {/* Tasks & Activities */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-purple-600">✓</span>
            </div>
            <span className="font-medium">Tasks</span>
          </div>
          <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-sm">
            16
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-2xl">⚡</span>
          <span className="font-medium">Activities</span>
        </div>
      </div>

      {/* Main Menu */}
      <div className="px-4">
        <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          MAIN
        </p>
        <nav className="space-y-1">
          {menuItems.map(({ icon: Icon, label, path }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors ${
                location.pathname === path
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Records */}
      <div className="px-4 mt-6">
        <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          RECORDS
        </p>
        <nav className="space-y-1">
          {recordItems.map(({ icon: Icon, label, path }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center justify-between px-4 py-2.5 rounded-lg transition-colors ${
                location.pathname === path
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon size={20} />
                <span>{label}</span>
              </div>
              <ChevronDown size={16} />
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Menu */}
      <div className="mt-auto px-4 pb-4">
        <nav className="space-y-1">
          {bottomItems.map(({ icon: Icon, label, path }) => (
            <Link
              key={path}
              to={path}
              className="flex items-center space-x-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        {/* User Profile */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 px-4 py-2">
            <img
              src="/api/placeholder/32/32"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1">
              <p className="text-sm font-medium">Brooklyn Simmons</p>
              <p className="text-xs text-gray-500">simmons@gmail.com</p>
            </div>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};
