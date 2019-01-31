/**
 * A modified version of the original 'en' translation
 * @see https://github.com/date-fns/date-fns/blob/v1.29.0/src/locale/en/build_distance_in_words_locale/index.js
 *
 * Replace:
 * - "X seconds" -> "Xs"
 * - "X minutes" -> "Xm"
 * - "X hours" -> "Xh"
 * and so on...
 *
 * Disable eslint and istanbul - keep original code formatting intact.
 */

/* eslint-disable */
/* istanbul ignore next */
function buildDistanceInWordsLocale () {
    var distanceInWordsLocale = {
        lessThanXSeconds: {
            one: 'now',
            other: 'now'
        },

        xSeconds: {
            one: '1s',
            other: '{{count}}s'
        },

        halfAMinute: '<1m',

        lessThanXMinutes: {
            one: '<1m',
            other: '<{{count}}m'
        },

        xMinutes: {
            one: '1m',
            other: '{{count}}m'
        },

        aboutXHours: {
            one: '~1h',
            other: '~{{count}}h'
        },

        xHours: {
            one: '1h',
            other: '{{count}}h'
        },

        xDays: {
            one: '1d',
            other: '{{count}}d'
        },

        aboutXMonths: {
            one: '~1mo',
            other: '~{{count}}mo'
        },

        xMonths: {
            one: '1mo',
            other: '{{count}}mo'
        },

        aboutXYears: {
            one: '~1y',
            other: '~{{count}}y'
        },

        xYears: {
            one: '1y',
            other: '{{count}}y'
        },

        overXYears: {
            one: '>1y',
            other: '>{{count}}y'
        },

        almostXYears: {
            one: '<1y',
            other: '<{{count}}y'
        }
    }

    function localize (token, count, options) {
        options = options || {}

        var result
        if (typeof distanceInWordsLocale[token] === 'string') {
            result = distanceInWordsLocale[token]
        } else if (count === 1) {
            result = distanceInWordsLocale[token].one
        } else {
            result = distanceInWordsLocale[token].other.replace('{{count}}', count)
        }

        if (options.addSuffix) {
            if (options.comparison > 0) {
                return 'in ' + result
            } else {
                return result + ' ago'
            }
        }

        return result
    }

    return {
        localize: localize
    }
}

module.exports = buildDistanceInWordsLocale
