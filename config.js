const createMacMenu = (cb, appName) => {
  return [
    {
      label: appName,
      submenu: [
        {
          label: 'About',
          click: cb,
        },
      ],
    },
  ];
};

const createWindowsMenu = (cb) => {
  return [
    {
      label: 'Help',
      submenu: [
        {
          label: 'About',
          click: cb,
        },
      ],
    },
  ];
};

const createMenu = (config, cb) => {
  const { isDev, isMac, appName } = config;
  return [
    ...(isMac ? createMacMenu(cb, appName) : []),
    {
      role: 'fileMenu',
    },
    ...(isDev
      ? [
          {
            label: 'Developer',
            submenu: [
              { role: 'reload' },
              { role: 'forcereload' },
              { type: 'separator' },
              { role: 'toggledevtools' },
            ],
          },
        ]
      : []),
    ...(!isMac ? createWindowsMenu(cb) : []),
  ];
};

module.exports = { createMenu };
