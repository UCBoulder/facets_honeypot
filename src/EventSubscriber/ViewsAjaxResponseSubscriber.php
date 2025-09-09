<?php

namespace Drupal\facets_honeypot\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;

/**
 * Alter a Views Ajax Response.
 */
class ViewsAjaxResponseSubscriber implements EventSubscriberInterface {

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents() {
    // Add the required method to implement EventSubscriberInterface.
    $events[KernelEvents::RESPONSE][] = ['onResponse'];
    return $events;
  }

  /**
   * Alters the views ajax response.
   *
   * @param \Symfony\Component\HttpKernel\Event\ResponseEvent $event
   *   The response event.
   */
  public function onResponse(ResponseEvent $event) {
    $bot = \Drupal::request()->query->get('field_not-an-option-65461');

    if ($bot) {
      \Drupal::logger('facets_honeypot')->debug('Bot box checked');
    }

  }

}
