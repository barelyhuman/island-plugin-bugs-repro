import Navigation from '@/components/navigation.js'
import BaseLayout from '@/layouts/BaseLayout'

import Counter from '@/components/Counter.island'

export function get(req, res) {
  return (
    <BaseLayout title="Home">
      <Navigation />
      <section class="flex flex-col gap-4">
        <p>
          <strong>Problem</strong>
        </p>
        <p>
          There are now 2 islands but wrapped wrongly. It's supposed to be the
          Counter island, wrapping the Container Island and the counter being
          inside the Container Island. But instead, it's like so
        </p>
        <pre>{`<island-counter>
  <div>0</div> <- Isn't supposed to be here
  <island-container>
    <div></div> <- Was supposed to populate here and become interactive
  </island-container>
</island-counter>`}</pre>
      </section>
      <section class="my-2">
        <Counter />
      </section>
    </BaseLayout>
  )
}
