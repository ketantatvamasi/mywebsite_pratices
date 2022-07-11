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
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mywebsite' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         'gB D3|.~ate^cf;(?B/[gr-yw%hRyx,Kq1T!NF,$HU Nu~*5%/P*bUC_+~:EaLr7' );
define( 'SECURE_AUTH_KEY',  '^Qt!K2/&&p!~D:Eg3(]vxpGuRL%>C?Z{`k0|a|,SaeA4t{ hYD2;*5:mE( o`Cy*' );
define( 'LOGGED_IN_KEY',    '@.Cy0Q_h}oJ4p5O[tZY@O2J^[$9EgF1NfN`xZ5(vb^W/-@)i;j:RGwrD1:.-S=:T' );
define( 'NONCE_KEY',        ';.+N9 !3_v[vf4Gbs|S;X6**tPor;bG-ZncZ?;yeY4gwS3a:17$+#/(e}ZL7@w1$' );
define( 'AUTH_SALT',        '2?*2pt[KAW8brD(nOp7? xHVX>};8)atCpd_x) {rgQVC3,Wnb&ik9Y#$m,5Z1vW' );
define( 'SECURE_AUTH_SALT', 'xp9OfH1P/phYk)[mNyj$Tonn7P):><<fl#Dm)g6{Y/3OLxuy! gZK/m^7%+ywe-)' );
define( 'LOGGED_IN_SALT',   'EZ}#p14`5$47=)tgJW<NA?pS,WEt42=zTb~~>HD^bW&4:MW]u32@B6U/1@i2>2 R' );
define( 'NONCE_SALT',       '-[TVVG:D[f(uH]h~y|LGso{QrxSYq$|],#WaG,k~NLWX?:$jCG}S4|>NzS:uXa~S' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
