import {
  HomeIcon,
  PersonIcon,
  MailIcon,
  ClockIcon,
  SaveIcon,
  SettingsIcon,
  SignOutIcon,
  Bar4Icon,
  AppIcon,
} from "../component/icons";

export default function Dashboard() {
  const navigationButtons = [
    <HomeIcon />,
    <PersonIcon />,
    <MailIcon />,
    <ClockIcon />,
    <SaveIcon />,
    <SettingsIcon />,
  ];

  return (
    <div className="flex h-screen">
      {/* Side Bar */}
      <div className="flex flex-col flex-shrink border">
        {/* Logo */}
        <AppIcon className="flex grow-0 justify-center m-5"></AppIcon>

        {/* Menus */}
        <div className="flex flex-col grow justify-start items-center mt-12">
          {navigationButtons.map((icon) => {
            return <div className="w-5 h-5 m-5">{icon}</div>;
          })}
        </div>

        {/* Sign Out */}
        <div className="flex grow-0 justify-center m-4">
          <SignOutIcon />
        </div>
      </div>

      {/* Content */}
      <div className="border grow p-5">
        {/* App Bar */}
        <div className="flex border items-center">
          <Bar4Icon className="w-5 h-5 m-5" />

          {/* Search Bar */}
          <div className="relative">
            <div className="flex items-center">
              <input type="text" className="rounded-full h-10"></input>
            </div>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              {/* <img src={SignOutIcon} /> */}
            </div>
          </div>
        </div>

        {/* Dynamic Content */}
        <div></div>
      </div>
    </div>
  );
}
