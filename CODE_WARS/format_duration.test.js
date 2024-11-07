function formatDuration (seconds) {
    if (seconds === 0) return 'now';
    const time = {
      year: null,
      years: null,
      year_str: null,
      day: null,
      days: null,
      day_str: null,
      hour: null,
      hours: null,
      hour_str: null,
      minute: null,
      minutes: null,
      minutes_str: null,
      second: null,
      seconds: null,
      second_str: null,
    };
    const SECONDS_IN_MINUTE = 60;
    const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE;
    const SECONDS_IN_DAY = 24 * SECONDS_IN_HOUR;
    const SECONDS_IN_YEAR = 365 * SECONDS_IN_DAY;

    const years = Math.floor(seconds / SECONDS_IN_YEAR);
    const days = Math.floor((seconds % SECONDS_IN_YEAR) / SECONDS_IN_DAY);
    const hours = Math.floor((seconds % SECONDS_IN_DAY) / SECONDS_IN_HOUR);
    const minutes = Math.floor((seconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
    const remainingSeconds = seconds % SECONDS_IN_MINUTE;

    if(years > 0) {
      time.year = years;
      time.years = years > 1 ? 'years' : 'year';
      time.year_str = `${years} ${time.years}`;
    }
    if(days > 0) {
      time.day = days;
      time.days = days > 1 ? 'days' : 'day';
      time.day_str = `${days} ${time.days}`;
    }
    if(hours > 0) {
      time.hour = hours;
      time.hours = hours > 1 ? 'hours' : 'hour';
      time.hour_str = `${hours} ${time.hours}`;
    }
    if(minutes > 0) {
      time.minute = minutes;
      time.minutes = minutes > 1 ? 'minutes' : 'minute';
      time.minutes_str = `${minutes} ${time.minutes}`;
    }
    if(remainingSeconds > 0) {
      time.second = remainingSeconds;
      time.seconds = remainingSeconds > 1 ? 'seconds' : 'second';
      time.second_str = `${remainingSeconds} ${time.seconds}`;
    }
    const strings = [];
    if (time.year_str) strings.push(time.year_str);
    if (time.day_str) strings.push(time.day_str);
    if (time.hour_str) strings.push(time.hour_str);
    if (time.minutes_str) strings.push(time.minutes_str);
    if (time.second_str) strings.push(time.second_str);
    const len = strings.length;
    if(len > 2) {
      const last = strings.pop();
      return `${strings.join(', ')} and ${last}`;
    } else if(len > 1) {
      return strings.join(' and ');
    } else {
      return strings[0];
    }
  }
  

  test('formatDuration', () => {
    expect(formatDuration(1)).toEqual('1 second');
    expect(formatDuration(62)).toEqual('1 minute and 2 seconds');
    expect(formatDuration(120)).toEqual('2 minutes');
    expect(formatDuration(3600)).toEqual('1 hour');
    expect(formatDuration(15731080)).toEqual('182 days, 1 hour, 44 minutes and 40 seconds');
  });

  test('formatDuration2', () => {
    expect(formatDuration(15731080)).toEqual('182 days, 1 hour, 44 minutes and 40 seconds');
  });