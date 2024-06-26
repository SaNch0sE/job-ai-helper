export const shortPulsesCss = {
  animation: {
    'short-pulse-create': 'colored-pulse-create 2s cubic-bezier(0.4, 0, 0.6, 1) 2',
    'short-pulse-update': 'colored-pulse-update 2s cubic-bezier(0.4, 0, 0.6, 1) 2',
    'short-pulse-delete': 'colored-pulse-delete 2s cubic-bezier(0.4, 0, 0.6, 1) 2'
  },
  keyframes: {
    'colored-pulse-create': {
      '0%, 100%': {
        'background-color': 'hsl(hsl(240 5.88% 10% / 1))',
      },
      '50%': {
        'background-color': '#0E793C',
      },
    },
    'colored-pulse-update': {
      '0%, 100%': {
        'background-color': 'hsl(hsl(240 5.88% 10% / 1))',
      },
      '50%': {
        'background-color': '#004493',
      },
    },
    'colored-pulse-delete': {
      '0%, 100%': {
        'background-color': 'hsl(hsl(240 5.88% 10% / 1))',
      },
      '50%': {
        'background-color': '#920B3A',
      },
    },
  },
};