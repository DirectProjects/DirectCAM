# Third-party notices

DirectCAM uses the following open-source dependencies. The RootEncoder RTSP module is modified locally; see notices/RTSP-PATCH.md in the matching library kit and the notices in the changed files. It is not affiliated with MOHOC, TAK Product Center, HelmCam, or ScreenStream. ScreenStream was a functional reference; its source code is not included.

- **RootEncoder 2.6.4**, Pedro Sánchez / pedroSG94 — Apache-2.0. Source: https://github.com/pedroSG94/RootEncoder/tree/2.6.4
- **UVCAndroid 1.0.9**, shiyinghan / herohan; UVCCamera code by saki / serenegiant — Apache-2.0 with separately licensed native libraries. Exact upstream source archive is supplied at `upstream/UVCAndroid-1.0.9.zip in the library kit`. Source: https://github.com/shiyinghan/UVCAndroid/tree/1.0.9
- **libusb** — LGPL-2.1-or-later. Its corresponding native sources and build scripts are in the UVCAndroid archive. DirectCAM 0.4.6 builds these libraries from the supplied uvc-camera module. Rebuild instructions are documented in README.md in the library kit. No prohibition on reverse engineering for debugging modifications to this library is imposed.
- **libuvc** — BSD-3-Clause. Copyright and terms in bundled license file and source archive.
- **libjpeg-turbo** — IJG, BSD-3-Clause, and zlib terms. **This software is based in part on the work of the Independent JPEG Group.**
- **libyuv** — BSD-style license and patent grant. Copyright The LibYuv Project Authors. License and patents files are supplied in assets; native source is in the UVCAndroid archive.
- **RapidJSON** — MIT and third-party terms; see bundled license and source archive.
- **AndroidX** — Android Open Source Project, Apache-2.0.
- **Kotlin, kotlinx.coroutines, Ktor** — JetBrains and contributors, Apache-2.0.
- **JUnit** (tests only) — Eclipse Public License 1.0.

Full license texts are in `assets/licenses inside the APK (also licenses/ in the library kit)` and are packaged inside the APK. The app's **LICENCJE I WERSJA** menu can display them. The Apache-2.0 text included for RootEncoder also provides the full license terms applicable to AndroidX, Kotlin, coroutines and Ktor.

TAK XML serialization was independently implemented against the public `VideoXMLHandler` format:
https://github.com/TAK-Product-Center/atak-civ/blob/main/atak/ATAK/app/src/main/java/com/atakmap/android/video/manager/VideoXMLHandler.java

Tooling used for verification (not shipped inside APK): Android SDK/emulator, Eclipse Temurin JDK 17, Gradle 8.13, MediaMTX.

## Additional runtime dependencies
- Hutool Core 5.8.35 — dromara / Hutool contributors, Mulan Permissive Software License v2. Original text: assets/licenses inside the APK (also licenses/ in the library kit)/Hutool-MulanPSL-2.0.txt. Source: https://github.com/dromara/hutool/tree/5.8.35
- SLF4J API 2.0.17 — QOS.ch / Ceki Gülcü, MIT. Original text: assets/licenses inside the APK (also licenses/ in the library kit)/SLF4J-MIT.txt. Source: https://github.com/qos-ch/slf4j/tree/v_2.0.17
- JetBrains annotations, kotlinx-io and kotlinx-serialization — JetBrains and contributors, Apache-2.0, alongside the Kotlin/Ktor dependencies listed above.

The resolved runtime dependency tree for this build is recorded in licenses/RUNTIME-DEPENDENCIES.txt in the library kit. Original artifact notice files are preserved separately in licenses/artifact-notices in the library kit where present. Main MIT scope: NOTICE and LICENSE.

DirectCAM 0.4.6 embeds the collected licenses and builds the USB native libraries from the supplied source. Earlier 0.4.5 binaries are not retroactively changed by this release.