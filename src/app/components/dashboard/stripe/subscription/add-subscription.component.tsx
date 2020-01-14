import React from 'react'

const stripe = require('stripe')('pk_test_JF5xfRvewfyAeFPgugZCgIxM00sGTTerR8');

stripe.subscriptions.create(
  {
    customer: 'cus_GXybZYX6gR0XsJ',
    items: [{plan: 'plan_GVQ796LiwZugJ9'}],
  },
  function(err, subscription) {
    // asynchronously called
  }
);