# DirectCAM

Aplikacja Android do transmisji z kamer USB-UVC, aparatu i ekranu telefonu. RTSP/RTMP, lokalny podgląd HTTP, nagrywanie MP4, PL/EN.

[Strona aplikacji](https://directprojects.github.io/DirectCAM/) · [Pobieranie APK i materiały bibliotek](https://directprojects.github.io/DirectCAM/legal.html)

## Wydanie 0.4.7-test
- Domyślny czarno-zielony motyw AMOLED Green, dopasowany do strony.
- Taka sama kolorystyka podglądu HTTP; czerwono-czarny tryb nocny nadal dostępny.
- Mniejsze pakiety RTSP dla VPN, niezależne bufory obrazu i żądanie klatki kluczowej po przepełnieniu kolejki.
- Biblioteki USB budowane ze źródeł; osobny pakiet pozwala podmienić bibliotekę w binarnej aplikacji.
- Uzupełnione licencje, informacje w aplikacji i na stronie.

Repozytorium zawiera stronę, APK i materiały bibliotek w docs/download oraz informacje licencyjne. Własny kod źródłowy aplikacji nie jest tutaj publikowany. MIT nie wymaga jego publikacji. Kod stron, narzędzi i oryginalny kod aplikacji mają licencję [MIT](LICENSE); biblioteki zachowują odrębne warunki opisane w [NOTICE](NOTICE), [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) oraz [pełnych tekstach](docs/licenses).

W folderze docs/download APK i pasujący pakiet DirectCAM-0.4.7-library-kit.zip są udostępniane razem. Pakiet zawiera odpowiadające źródła bibliotek USB, skrypty, binarną aplikację oraz instrukcję przebudowania i podpisania zmodyfikowanej wersji bez własnych źródeł DirectCAM i klucza dystrybutora. Zachowaj dostępność obu plików.

[RTSP przez VPN](RTSP-VPN.md) · [Weryfikacja wydania](VALIDATION.md)

To wydanie testowe. Pobierz je przyciskiem na stronie. Aktualizator w aplikacji wyszukuje wyłącznie stabilne wydania GitHub Releases i nie zaproponuje automatycznie tej wersji. Publikacja tej paczki nie wymaga tworzenia Release.
