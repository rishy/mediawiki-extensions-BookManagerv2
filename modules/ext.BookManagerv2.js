/**
 * @file
 * @section LICENSE
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 **/

$(function () {
	$('a.mw-bookmanagerv2-nav-data').click( function() {
		if ( $('div.mw-bookmanagerv2-nav-toc').is(':visible') ) {
			$('div.mw-bookmanagerv2-nav-toc').hide();
		}
		$('div.mw-bookmanagerv2-nav-data').toggle();
	});
	$('a.mw-bookmanagerv2-nav-toc').click( function() {
		if ( $('div.mw-bookmanagerv2-nav-data').is(':visible') ) {
			$('div.mw-bookmanagerv2-nav-data').hide();
		}
		$('div.mw-bookmanagerv2-nav-toc').toggle();
	});
});
