export const menu = [
  {
    id: 1,
    title: "Chính",
    listItems: [
      {
        id: 1,
        title: "Trang chủ",
        url: "/",
        icon: "home.svg",
      },
      // {
      //   id: 2,
      //   title: "Profile",
      //   url: "/users/1",
      //   icon: "user.svg",
      // },
      // {
      //   id: 2,
      //   title: "Tài khoản",
      //   url: "/users",
      //   icon: "user.svg",
      // },
      {
        id: 3,
        title: "Đơn hàng của tôi",
        url: "/myOrder",
        icon: "order.svg",
      },
    ],
  },
  // {
  //   id: 2,
  //   title: "",
  //   listItems: [
  //     {
  //       id: 1,
  //       title: "Tài khoản",
  //       url: "/users",
  //       icon: "user.svg",
  //     },
  //     {
  //       id: 2,
  //       title: "Products",
  //       url: "/products",
  //       icon: "product.svg",
  //     },
  //     {
  //       id: 3,
  //       title: "Orders",
  //       url: "/orders",
  //       icon: "order.svg",
  //     },
  //   ],
  // },
  {
    id: 2,
    title: "Chung",
    listItems: [
      // {
      //   id: 1,
      //   title: "Elements",
      //   url: "/",
      //   icon: "element.svg",
      // },
      {
        id: 1,
        title: "Ghi chú",
        url: "/",
        icon: "note.svg",
      },
      // {
      //   id: 3,
      //   title: "Forms",
      //   url: "/",
      //   icon: "form.svg",
      // },
      {
        id: 2,
        title: "Lịch",
        url: "/",
        icon: "calendar.svg",
      },
      {
        id: 3,
        title: "Cài đặt",
        url: "/",
        icon: "setting.svg",
      },
    ],
  },
  // {
  //   id: 4,
  //   title: "Maintenance",
  //   listItems: [
  //     {
  //       id: 1,
  //       title: "Settings",
  //       url: "/",
  //       icon: "setting.svg",
  //     },
  //     {
  //       id: 2,
  //       title: "Backups",
  //       url: "/",
  //       icon: "backup.svg",
  //     },
  //   ],
  // },
  {
    id: 3,
    title: "Thống kê",
    listItems: [
      {
        id: 1,
        title: "Biểu đồ",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Nhật ký",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const customerOrder = [
  {
    id: "2002ABC",
    customer_id: "2001",
    date: "14-02-2023",
    destination: "Hồ Tùng Mậu, Mai Dịch, Cầu Giấy",
  },
  {
    id: "3001ABC",
    customer_id: "2001",
    date: "14-05-2023",
    destination: "Phố Chợ 2, Hùng Sơn, Thái Nguyên",
  },
];

type Activity = {
  text: string;
  time: string;
};

type TransportStatusMap = {
  [key: string]: {
    id: string;
    title: string;
    activities: Activity[];
  };
};


export const transportStatusMap: TransportStatusMap = {
  '2002ABC': {
    id: '2002ABC',
    title: 'Playstation 5 Digital Edition',
    activities: [
      {
        text: 'Đã đến C',
        time: '3 ngày trước',
      },
      {
        text: 'Jane Doe added Playstation 5 Digital Edition into their wishlist',
        time: '1 week ago',
      },
      {
        text: 'Mike Doe purchased Playstation 5 Digital Edition',
        time: '2 weeks ago',
      },
    ],
  },

  '3001ABC': {
    id: '3001ABC',
    title: 'Playstation 5 Digital Edition',
    activities: [
      {
        text: 'Đã đến B',
        time: '3 ngày trước',
      },
      {
        text: 'Jane Doe added Playstation 5 Digital Edition into their wishlist',
        time: '1 week ago',
      },
      {
        text: 'Mike Doe purchased Playstation 5 Digital Edition',
        time: '2 weeks ago',
      },
    ],
  },
  // Thêm các thông tin cho các id khác nếu cần
};
