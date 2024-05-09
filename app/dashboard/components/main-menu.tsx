import MenuItem from "./menu-item";
import MenuTitle from "./menu-title";

export default function MainMenu() {
  return (
    <div className="bg-muted overflow-auto px-6 py-4">
      <div className="border-b dark:border-slate-600 border-slate-300 pb-4">
        <MenuTitle />
      </div>
      <div className="py-4">
        <MenuItem href="/dashboard">My dashboard</MenuItem>
        <MenuItem href="/dashboards/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </div>
    </div>
  );
}
