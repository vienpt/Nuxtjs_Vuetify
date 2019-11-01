<template>
  <div />
</template>

<script>
import * as Mgr from '~/services/app';

export default {
  created () {
    const mgr = Mgr.InitMgr();
    mgr.signinSilentCallback();
  }
};
</script>
