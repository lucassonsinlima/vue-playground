import Candidates from "@/pages/Candidates";
import Conditionals from "@/pages/Conditionals";
import MonsterKiller from "@/pages/MonsterKiller";

export default  [
  {
    path: '/' ,
    component: Candidates
  },
  {
    path: '/conditionals',
    component: Conditionals
  },
  {
    path: '/monster-killer',
    component: MonsterKiller
  },
  {
    path: '/async',
    component: () => lazyLoadView(import('@/pages/Async'))
  },
  {
    path: '/lifecycle',
    component: () => lazyLoadView(import('@/pages/LifeCycle'))
  },
  {
    path: '/event-bus',
    component: () => lazyLoadView(import('@/pages/EventBus'))
  }
]

function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    // A component to use while the component is loading.
    loading: require('@/router/views/_loading').default,
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 0,
    // A fallback component in case the timeout is exceeded
    // when loading the component.
    error: require('@/router/views/_timeout').default,
    // Time before giving up trying to load the component.
    // Default: Infinity (milliseconds).
    timeout: 10000,
  })

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      // Transparently pass any props or children
      // to the view component.
      return h(AsyncHandler, data, children)
    },
  })
}
