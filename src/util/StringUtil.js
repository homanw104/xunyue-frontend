/**
 * @file String utilities.
 * @author Homan Wong
 */

class StringUtil {

  /**
   * Convert millisecond to formatted string.
   * @param ms integer in milliseconds
   * @return {string} formatted string.
   */
  static msToString(ms) {
    let hours = Math.round(ms / (1000 * 60 * 60));
    let minutes = Math.round((ms % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.round((ms % (1000 * 60)) / 1000);
    return ((hours === 0) ? ('') : (hours.toString() + ' hr '))
      + ((minutes === 0) ? ('') : (minutes.toString() + ' min '))
      + (seconds.toString() + ' sec');
  }

}

export default StringUtil;