import Navigation from '@/components/navigation.js'
import BaseLayout from '@/layouts/BaseLayout'
import TimelineItem from '@/components/TimelineItem.island'
import TimelineItemNonIsland from '@/components/TimelineItem'

export function get(req, res) {
  return (
    <BaseLayout title="Home">
      <Navigation />
      <section>
        <p>
          <strong>Problem</strong>
        </p>
        <p>
          The 2nd item renders the value when not hydrating but when hydrating
          the children are deleted (on client side)
        </p>
      </section>

      <section>
        <TimelineItem name="new project"></TimelineItem>
        <TimelineItem name="issue in this one">
          <div class="text-zinc-500">{new Date().toLocaleDateString()}</div>
          <div class="text-zinc-500">{new Date().toLocaleTimeString()}</div>
        </TimelineItem>
        <TimelineItemNonIsland name="not an issue when just server rendering">
          <div class="text-zinc-500">{new Date().toLocaleDateString()}</div>
          <div class="text-zinc-500">{new Date().toLocaleTimeString()}</div>
        </TimelineItemNonIsland>
      </section>
    </BaseLayout>
  )
}
