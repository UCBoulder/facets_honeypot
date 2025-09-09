<?php

namespace Drupal\facets_honeypot\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;

/**
 * Alter a Views Ajax Response.
 */
class FacetsHoneypotSubscriber implements EventSubscriberInterface {

  /**
   * {@inheritdoc}
   */
  public function onRequest(RequestEvent $event) {

    return;
  }

}

