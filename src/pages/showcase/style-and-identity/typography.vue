<template>
  <q-page padding>
    <p class="caption">Headings</p>
    <div v-for="heading in headings" :key="heading.class" class="row items-center q-mb-lg">
      <div class="col-sm-3 col-12">
        <q-chip color="primary" square>.{{ heading.class }}</q-chip>
        <q-chip color="secondary" square v-if="heading.equivalent">{{ heading.equivalent }}</q-chip>
      </div>
      <div class="col-sm-9 col-12 q-pl-md q-pt-md">
        <div class="q-mb-md" :class="[heading.class, `${heading.class}-opacity`]">{{ heading.label }}</div>
        <div class="text-weight-light">
          black <strong>{{ heading.color }}%</strong>, font weight <strong>{{ heading.weight }}</strong>
        </div>
      </div>
    </div>

    <p class="caption">Weights</p>
    <div v-for="weight in weights" :key="weight" class="row items-center q-mb-md">
      <div class="col-sm-3 col-12">
        <q-chip color="primary" square>.text-weight-{{ weight }}</q-chip>
      </div>
      <div class="col-sm-9 col-12 q-mb-none q-pl-md q-pt-sm q-pb-sm">
        <div :class="`text-weight-${weight}`"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      </div>
    </div>

    <p class="caption">Blockquotes</p>
    <blockquote>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <small>Someone famous for <cite title="Quasar Framework">Quasar Framework</cite></small>
    </blockquote>

    <blockquote class="text-right">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <small>Someone famous for <cite title="Quasar Framework">Quasar Framework</cite></small>
    </blockquote>

    <p class="caption">Definition Lists - Vertical</p>
    <dl>
      <dt>Description lists</dt>
      <dd>A description list is perfect for defining terms.</dd>
      <dt>Euismod</dt>
      <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
      <dd>Donec id elit non mi porta gravida at eget metus.</dd>
      <dt>Malesuada porta</dt>
      <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
    </dl>

    <p class="caption">Definition Lists - Horizontal</p>
    <dl class="horizontal">
      <dt>Description lists</dt>
      <dd>A description list is perfect for defining terms.</dd>
      <dt>Euismod</dt>
      <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
      <dd>Donec id elit non mi porta gravida at eget metus.</dd>
      <dt>Malesuada porta</dt>
      <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
    </dl>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      headings: [
        {label: 'Light 112sp', 'class': 'q-display-4', equivalent: 'h1', color: 54, weight: 300},
        {label: 'Regular 56sp', 'class': 'q-display-3', equivalent: 'h2', color: 54, weight: 400},
        {label: 'Regular 45sp', 'class': 'q-display-2', equivalent: 'h3', color: 54, weight: 400},
        {label: 'Regular 34sp', 'class': 'q-display-1', equivalent: 'h4', color: 54, weight: 400},
        {label: 'Regular 24sp', 'class': 'q-headline', equivalent: 'h5', color: 87, weight: 400},
        {label: 'Medium 20sp', 'class': 'q-title', equivalent: 'h6', color: 87, weight: 500},
        {label: 'Regular 16sp', 'class': 'q-subheading', color: 87, weight: 400},
        {label: 'Medium 14sp', 'class': 'q-body-2', color: 87, weight: 500},
        {label: 'Regular 14sp', 'class': 'q-body-1', color: 87, weight: 400},
        {label: 'Regular 12sp', 'class': 'q-caption', color: 54, weight: 400}
      ],
      weights: [
        'thin', 'light', 'regular', 'medium', 'bold', 'bolder'
      ]
    }
  }
}
</script>
