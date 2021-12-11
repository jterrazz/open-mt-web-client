import { getPageTitle } from '@organisms/TheHead';

describe('getPageTitle', function () {
    it('should return the website name', function () {
        // Given
        const pageTitle = undefined;

        // When
        const result = getPageTitle(pageTitle);

        // Then
        expect(result).toEqual('My Open Market');
    });

    it('should return the website name with the page title', function () {
        // Given
        const pageTitle = 'The page title';

        // When
        const result = getPageTitle(pageTitle);

        // Then
        expect(result).toEqual('The page title | My Open Market');
    });
});
