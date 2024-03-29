import defaultSettings from '@/settings'

const title = defaultSettings.title || '君爷图书馆'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
