// Base class
class Notification {
  send(message) {
    // Base method: should be overridden
    console.log("Sending notification:", message);
  }
}

// Subclass for Email
class EmailNotification extends Notification {
  send(message) {
    console.log(`Email sent: ${message}`);
  }
}

// Subclass for SMS
class SMSNotification extends Notification {
  send(message) {
    console.log(`SMS sent: ${message}`);
  }
}

// Subclass for Push
class PushNotification extends Notification {
  send(message) {
    console.log(`Push notification sent: ${message}`);
  }
}

// Example usage
const notifications = [
  new EmailNotification(),
  new SMSNotification(),
  new PushNotification()
];

notifications.forEach(notif => notif.send("Hello World!"));
