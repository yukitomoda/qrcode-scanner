<script>
import QrCodeScanner from '@/components/QrCodeScanner.client.vue';
</script>

<template>
  <div>
    <ClientOnly>
      <QrCodeScanner></QrCodeScanner>
    </ClientOnly>
  </div>
</template>
