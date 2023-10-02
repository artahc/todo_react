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
  SearchIcon,
  NotificationIcon,
  CalendarIcon,
  ChevronIcon,
  AdjustmentIcon,
  PlusIcon,
  EllipsisIcon,
  PaperClipIcon,
  ChatBubbleOvalIcon,
} from "../component/icons";
import { Todo } from "../model/Todo";

export default function Dashboard() {
  const startedTodos: Todo[] = [
    {
      id: 1,
      isCompleted: false,
      title: "Wireframing, mockups, clients, collaborations",
    } as Todo,
    {
      id: 2,
      isCompleted: false,
      title: "Wireframing, mockups, clients, collaborations",
    } as Todo,
  ];
  const inProgressTodos: Todo[] = [
    {
      id: 3,
      isCompleted: false,
      title: "Wireframing, mockups, clients, collaborations",
    } as Todo,
  ];
  const completedTodos: Todo[] = [
    {
      id: 4,
      isCompleted: false,
      title: "Wireframing, mockups, clients, collaborations",
    } as Todo,
    {
      id: 5,
      isCompleted: false,
      title: "Wireframing, mockups, clients, collaborations",
    } as Todo,
  ];

  return (
    <div className="flex h-screen bg-[#f2edfc]">
      <SideBar />
      <div className="flex flex-col grow p-3 border">
        {/* App Bar */}
        <div className="flex items-center">
          <Bar4Icon className="w-5 h-5 m-5" />

          {/* Search Bar */}
          <div className="flex grow relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="w-5" color="black" />
            </div>
            <input
              type="text"
              className="grow rounded-full h-9 focus:text-black text-gray-700 pl-10 pr-2 text-sm"
              placeholder="Search"
            ></input>
            <div className="grow flex gap-4 justify-end items-center pl-2 pr-2">
              <NotificationIcon className="w-5" />
              <CalendarIcon className="w-5" />
              <div className="border-l h-5"></div>
              <div className="">
                <div className="rounded-full w-6 h-6 bg-white border"></div>
              </div>
              <ChevronIcon />
            </div>
          </div>
        </div>

        <div className="flex flex-col grow bg-[#fbfbfc] pl-6 pr-6 pt-3 pb-3 rounded-3xl">
          <div className="flex items-center justify-between mt-2 mb-6">
            <p className="font-bold text-xl">Projects</p>
            <div className="flex items-center gap-4">
              <AdjustmentIcon className="w-5 h-5" color="#635b66" />
              <div className="text-sm bg-[#754BE5] h-9 pl-4 pr-4 rounded-full items-center flex">
                <p className="text-white text-sm">Create Project</p>
              </div>
            </div>
          </div>

          <div className="flex grow flex-row justify-start gap-5">
            <TodoBoard title="Started">
              {startedTodos.map((e) => {
                return <TodoCard todo={e} />;
              })}
            </TodoBoard>
            <TodoBoard title="On Going">
              {inProgressTodos.map((e) => {
                return <TodoCard todo={e} />;
              })}
            </TodoBoard>
            <TodoBoard title="Completed">
              {completedTodos.map((e) => {
                return <TodoCard todo={e} />;
              })}
            </TodoBoard>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideBar() {
  const navigationButtons = [
    <HomeIcon className="w-5" color="white" />,
    <PersonIcon className="w-5" color="white" />,
    <MailIcon className="w-5" color="white" />,
    <ClockIcon className="w-5" color="white" />,
    <SaveIcon className="w-5" color="white" />,
    <SettingsIcon className="w-5" color="white" />,
  ];

  return (
    <div className="flex flex-col flex-shrink items-center w-20 bg-[#1e0059]">
      {/* Logo */}
      <AppIcon className="flex w-6 justify-center mt-8" color="white"></AppIcon>

      {/* Menus */}
      <div className="flex flex-col grow items-center mt-16 gap-8">
        {navigationButtons.map((icon) => {
          return icon;
        })}
      </div>

      {/* Sign Out */}
      <div className="flex justify-center w-5 mb-10">
        <SignOutIcon className="w-5 h-5" color="white" />
      </div>
    </div>
  );
}

function TodoCard({ todo }: { todo: Todo }) {
  return (
    <div className="relative flex h-44 rounded-xl bg-white border">
      <EllipsisIcon className="absolute top-4 right-4 w-5" />
      <div className="flex grow items-start flex-col px-4 py-3">
        <div className="px-4 py-2 rounded-full bg-[#E9F0FF] border-[#acc8ff] border">
          <p className="text-xs font-semibold text-[#256eff]">Web Design</p>
        </div>

        <div className="grow flex">
          <p className="text-xs mt-2 text-[#726a75] ">{todo.title}</p>
        </div>

        <div className="w-full">
          <p className="flex justify-end text-xs text-[#726a75]">{75}%</p>
          <ProgressBar progress={75} />
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              {["a", "b", "c"].map((e, i) => {
                const marginLeft = i > 0 ? `-8px` : "0";
                return (
                  <div
                    key={i}
                    className="relative flex w-6 h-6 rounded-full items-center justify-center bg-[#6f42b3] border"
                    style={{ marginLeft: marginLeft }}
                  >
                    <p className="text-xs text-white">{e}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-2">
              <div className="flex h-full gap-1 items-center">
                <PaperClipIcon className="w-4" />
                <p className="text-xs">5</p>
              </div>
              <div className="flex h-full gap-1 items-center">
                <ChatBubbleOvalIcon className="w-4" />
                <p className="text-xs">5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TodoBoard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-1/4">
      <div className="flex justify-between mb-2">
        <p className="text-sm text-[#635b66]"> {title}</p>
        <div className="flex items-center rounded-full w-5 h-5 bg-[#f2f6fe] border">
          <PlusIcon className="w-5" color="#635b66" />
        </div>
      </div>
      <div className="flex grow flex-col gap-2">{children}</div>
    </div>
  );
}

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="relative h-2 w-full bg-[white] rounded-full">
      <div
        className="absolute w-full h-full bg-[#f0ebff] rounded-[inherit]"
        style={{ width: "100%" }}
      ></div>
      <div
        className="absolute w-full h-full bg-[#6f42b3] rounded-[inherit]"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
