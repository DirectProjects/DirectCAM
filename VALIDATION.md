# DirectCAM 0.4.7-test — weryfikacja

## Kompilacja i zmiany

- APK skompilowane z versionCode 16 i versionName 0.4.7-test; podpis zachowany jak w poprzednich wydaniach.
- Lint release: 0 errors, 62 warnings. Ostrzeżenia pozostają opisane w lokalnym raporcie kompilacji.
- Zmieniono paletę głównego interfejsu, okien dialogowych, pasków systemowych, podglądu HTTP i stron dostępu do niego. Tryb nocny pozostaje czerwono-czarny; wybór użytkownika jest zachowany.
- Oficjalne narzędzie AAPT2 w tym środowisku zamykało się przy zapisie ZIP. Użyto jego opcji --output-to-dir, a archiwum pośrednie zapakowano lokalnym pomocniczym narzędziem. Zasoby nadal kompiluje oficjalne AAPT2; końcowe APK tworzy i podpisuje Android Gradle Plugin. To obejście lokalnego środowiska budowania, nie zmiana działania aplikacji.
- Biblioteki natywne są identyczne z poprzednim wydaniem. Kod transportu RTSP nie został w tej korekcie zmieniony.

## Materiały bibliotek i prywatność źródeł

Pasujący pakiet library-kit przebudowano po celowej zmianie biblioteki, dla wszystkich czterech architektur. Utworzono i zweryfikowano podpisane APK bez źródeł aplikacji i klucza autora. Sprawdzono znacznik zmiany, niezmienność pozostałych plików APK i zgodność eksportów/zależności 20 bibliotek. Szczegóły: VERIFICATION.md i VERIFICATION.json w pakiecie.

Folder repo i załączniki wydania nie zawierają własnych źródeł aplikacji. Zachowano teksty licencji, odpowiadające źródła bibliotek i narzędzie do ich podmiany. Historyczne opisy aktualizacji na stronie zachowano; dodano osobny wpis 0.4.7-test. Sumy APK na stronie, w release.json i SHA256SUMS.txt są zgodne.

## Ograniczenia

Nie wykonano nowego testu uruchomienia na Androidzie — emulator nie był dostępny podczas poprzedniej próby. Motyw, fizyczna kamera USB i odbiór RTSP w WinTAK przez VPN wymagają sprawdzenia na telefonie użytkownika. Starsze testy transportu nie stanowią potwierdzenia działania każdej sieci VPN.

To wydanie testowe i powinno mieć znacznik GitHub Pre-release. Aktualizator aplikacji sprawdza tylko stabilne wydania; plik testowy pobiera się ręcznie ze strony lub z GitHub Releases. Brak zweryfikowanego skanu VirusTotal tego APK. Pliki przygotowano lokalnie do samodzielnej publikacji.

Weryfikacja techniczna nie jest gwarancją prawną.
