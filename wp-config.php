<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'FF!3NCdWF<whesP(eawn1i7[{:ML5)lJj)*ZJ?Y^F;nhFVZK_i`C4dCCB,#`Cv{Q' );
define( 'SECURE_AUTH_KEY',   '8#7$mgmfzzNZhtT^hS]n_d(6}uwfm_9duj  [xQ}`K%<Vxqmpl`D_X~mooFIW6sm' );
define( 'LOGGED_IN_KEY',     'g=^Pqs0H6eOG.-KW%X^{;mjQcf#[czHYF#5_xN uL#]Wc&d(^OOk>rEXpoVpw<@}' );
define( 'NONCE_KEY',         'UZiI/CL`@_B24,8dLhQc&?;}( $!A;7y!/9uQ`p9-DaOJj5>/aK2o-Rd9-~yxJDi' );
define( 'AUTH_SALT',         '_E`3{}(Yf<dDbA!XHQYG?*x)TPj:#}(8^c6pN{KBN^V$.Nue6&WO1C2iiwlHSdD2' );
define( 'SECURE_AUTH_SALT',  'sc.;<?eJ9`FgVF;w3)Nk:0K~-$at>.kD@F^S6m r)GvJB:8[xQ*`02Wymp*^|1;.' );
define( 'LOGGED_IN_SALT',    '&:2yQ=GXO*c_//?mX=> 0a67Ed4uAPb!Ubguh=F+6^ysEQ)2Gzd! ^~L@:}#DcB1' );
define( 'NONCE_SALT',        'ZKz?s1i6-+1*$][ES#V_!}OJd/Ud$+Pl}>*L)LI^5IbY_u-[y QSaR9O(2:4M/1w' );
define( 'WP_CACHE_KEY_SALT', 'uc&:?kvi-53d->7=YEz_bf.t=4m]O kK;9^1Hmb}$xOUg;@+#E` 87E@)RpB(.=y' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
