<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
    <html> 
      <body> 
        <h2>Catalog</h2>
        <ul>
          <xsl:for-each select="catalog/product"> 
            <li>
              <article style="margin-bottom: 50px;">
                <hgroup>
                  <h3 style="display: inline; margin-right: 10px;">
                    <xsl:value-of select="@product_id"/>
                  </h3>
                  <p  style="display: inline;">
                    <xsl:value-of select="@description"/>
                  </p>
                </hgroup>
               

                <h3>Catalog Items</h3>
                <table border="1">
                  <tr> 
                    <th>Item number</th> 
                    <th>Price</th> 
                    <th>Gender</th> 
                    <th>Small</th> 
                    <th>Medium</th> 
                    <th>Large</th> 
                    <th>Extra Large</th>
                  </tr> 
                  
                  <xsl:for-each select="catalog_item/size"> 
                    <tr>
                      <td><xsl:value-of select="../item_number"/></td>
                      <td><xsl:value-of select="../price"/></td>
                      <td>
                      <xsl:choose>
                      <xsl:when test="../@gender='Women'">W</xsl:when>
                      <xsl:when test="../@gender='Men'">M</xsl:when>
                      <xsl:otherwise></xsl:otherwise>
                      </xsl:choose>
                      </td>
                      <td>
                      <xsl:if test="@description='Small'">
                      <table border="1">
                      <tr>
                      <th>Color</th>
                      <th>Image</th>
                      </tr>
                      <tr>
                      <td><xsl:value-of select="color_swatch"/></td>
                      <td><xsl:value-of select="color_swatch/@image"/></td>
                      </tr>
                      </table>       
                      </xsl:if>
                      </td>
                      <td>
                      <xsl:if test="@description='Medium'">
                      <table border="1">
                      <tr>
                      <th>Color</th>
                      <th>Image</th>
                      </tr>
                      <tr>
                      <td><xsl:value-of select="color_swatch"/></td>
                      <td><xsl:value-of select="color_swatch/@image"/></td>
                      </tr>
                      </table>
                      </xsl:if>
                      </td>
                      <td>
                      <xsl:if test="@description='Large'">
                      <table border="1">
                      <tr>
                      <th>Color</th>
                      <th>Image</th>
                      </tr>
                      <tr>
                      <td><xsl:value-of select="color_swatch"/></td>
                      <td><xsl:value-of select="color_swatch/@image"/></td>
                      </tr>
                      </table>
                      </xsl:if>
                      </td>
                      <td>
                      <xsl:if test="@description='Extra Large'">
                      <table border="1">
                      <tr>
                      <th>Color</th>
                      <th>Image</th>
                      </tr>
                      <tr>
                      <td><xsl:value-of select="color_swatch"/></td>
                      <td><xsl:value-of select="color_swatch/@image"/></td>
                      </tr>
                      </table>
                      </xsl:if>
                      </td>
                    </tr>
                  </xsl:for-each> 
                </table>
              </article>
            </li>
          </xsl:for-each> 
        </ul>
      </body> 
    </html>
  </xsl:template>  
</xsl:stylesheet>