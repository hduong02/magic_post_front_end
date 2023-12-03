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
        title: "Xác nhận đơn hàng",
        url: "/order/approve",
        icon: "order.svg",
      },
      {
        id: 4,  
        title: "Tạo đơn hàng",
        url: "/order/create",
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

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Tổng hàng nhận",
  number: "11.238",
  dataKey: "products",
  percentage: 45,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Hàng đã giao",
  number: "10.238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Tổng doanh thu",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const waitingOrder = [
  {
    id: "1002ABC",
    customer_id: "1002",
    source: "Điểm tập kết",
    source_name: "Điểm tập kết A",
  }
];

export const confirmedOrder = [
  {
    id: "2002ABC",
    customer_id: "2002",
    source: "Điểm giao dịch",
    source_name: "Điểm giao dịch B2",
  },
  {
    id: "3001ABC",
    customer_id: "2002",
    source: "Điểm tập kết",
    source_name: "Điểm tập kết C",
  }
];