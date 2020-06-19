module.exports = {
  title: 'Kick Consent Manager',
  locales: {
    '/': {
      lang: 'de-DE',
      title: 'Kick Consent Manager',
      description: 'Cookie Consent Manager für Joomla'
    },
    '/en/': {
      lang: 'en-GB',
      title: 'Kick Consent Manager',
      description: 'Cookie Consent Manager for Joomla'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  themeConfig: {
    repo: 'Kicktemp/kcmdoku',
    editLinks: true,
    smoothScroll: true,
    locales: {
      '/': {
        label: 'Deutsch',
        selectText: 'Sprachen',
        ariaLabel: 'Sprachen',
        editLinkText: 'Diese Seite auf GitHub bearbeiten',
        lastUpdated: 'Zuletzt aktualisiert',
        serviceWorker: {
          updatePopup: {
            message: "Neuer Inhalt verfügbar.",
            buttonText: "Neuladen"
          }
        },
        nav: require('./nav/de'),
        sidebar: {
          '/guide/': getGuideSidebar('Guide', 'Advanced'),
        }
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
  ],
  extraWatchFiles: [
    '.vuepress/nav/de.js'
  ]
}

function getGuideSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'directory-structure',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'i18n',
        'deploy'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'frontmatter',
        'permalinks',
        'markdown-slot',
        'global-computed'
      ]
    }
  ]
}
